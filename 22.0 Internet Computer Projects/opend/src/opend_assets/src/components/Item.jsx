import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";
import Button from "./Button";
import { opend } from "../../../declarations/opend";

function Item(props) {
  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();
  const [button, setButton] = useState();
  const [priceInput, setPriceInput] = useState();
  const [loaderHidden, setLoaderHidden] = useState(true);
  const [blur, setBlur] = useState();
  const [sellStatus, setSellStatus] = useState("");


  const id = props.id;

  const localhost = "http://localhost:8080";
  const agent = new HttpAgent({host:localhost});
  //TODO: When deploy Live remove the following line
  agent.fetchRootKey();

  let NFTActor;

  async function loadNFT() {
    NFTActor = await Actor.createActor(idlFactory,{
      agent,
      canisterId: id,
    });

    const name = await NFTActor.getName()
    const owner = await NFTActor.getOwner()
    const imageData = await NFTActor.getAsset();
    const imageContent = new Uint8Array(imageData);
    const image = URL.createObjectURL(new Blob([imageContent.buffer], {type:"image/png"}));


    setName(name);
    // setOwner(Principal.toText(owner))
    //Alternatively use:
    setOwner(owner.toText());
    setImage(image);
    const nftIsListed = await opend.isListed(props.id);

    //We can use the constant:
    if (nftIsListed) {
      setOwner("OpenD");
      setBlur({filter: "blur(4px)"});
      setSellStatus("Listed");
    } else {
      setButton(<Button handleClick={handleSale} text={"Sell"}/>)
    }
  }

  useEffect(()=> {
    loadNFT();
  }, [])

  let price;
  function handleSale() {
    console.log("Sell Clicked");
    setPriceInput(<input
      placeholder="Price in DAN"
      type="number"
      className="price-input"
      value={price}
      onChange={e => (price = e.target.value)}
    />)
    
    setButton(<Button handleClick={sellItem} text={"Confirm"}/>)
  }

  async function sellItem() {
    setBlur({filter: "blur(4px)"});
    setLoaderHidden(false);
    console.log("Set Price = " + price);
    console.log(props.id);
    const listingResult = await opend.listItem(Principal.fromText(props.id), Number(price));
    console.log("Listing: " + listingResult)
    if (listingResult == "Success") {
      //call the transfer function:
      const openDId = await opend.getOpenDCanisterID();
      const transferResult = await NFTActor.transferOwnership(openDId);
      console.log("Transfer: " + transferResult);
      if (transferResult == "Success") {
        setLoaderHidden(true);
        setButton();
        setPriceInput();
        setOwner("OpenD");
        setSellStatus("Listed");
      }
    }
  }

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image} 
          style={blur}
        />
          <div hidden={loaderHidden} className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}<span className="purple-text"> {sellStatus} </span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
          {priceInput}
          {button}
        </div>
      </div>
    </div>
  );
}

export default Item;
