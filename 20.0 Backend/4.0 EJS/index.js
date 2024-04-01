import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let dayOfWeek = "It's a weekday";
    let Adv = "It's time to work hard";

    if (day === 0 || day === 6) {
        dayOfWeek = "It's the weekend";
        Adv = "It's time to have fun"
    }

    //Render it to page:
    res.render("index.ejs",
        {
            dayType: dayOfWeek,
            advice: Adv
        }
    );
});


app.listen(port, () => {
    console.log(`Server successfully running on port ${port}`);
})