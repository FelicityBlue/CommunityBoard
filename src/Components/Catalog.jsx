import React from "react";
import Series from "./Series";

import supermanImg from "../images/superman2023.jpg";
import wwImg from "../images/absoluteww.jpg";
import spidermanImg from "../images/spiderman.jpg"
import poisonivyImg from "../images/poisonivy2024.jpg";
import zatanna2025 from "../images/zatanna2025.jpg";
import batsupImg from "../images/batsupfinest.jpg";
import sonofbatImg from "../images/sonofbatman.jpg";
import nightwing1996Img from "../images/nightwing1996.jpg";
import batdetectiveImg from "../images/detective.jpg";
import fanta42022Img from "../images/f42022.jpg";

const Catalog = () => {

    return (
    <div>
        <table>
            <tr>
                <td>
                    <Series coverimg={supermanImg} title="Superman(2023)" writers="Joshua Williamson" artists={[" Jamal Campbell,", " Gleb Melnikov,", " Bruno Redondo,", " David Baldeon,", " Rafa Sandoval,", " Dan Mora"]} descriptionlink="https://dc.fandom.com/wiki/Superman_Vol_6"/>
                </td>
                <td>
                    <Series coverimg={wwImg} title="Absolute Wonder Woman(2024)" writers=" Kelly Thompson" artists={[" Hayden Sherman,", " Jordie Bellaire"]} descriptionlink="https://dc.fandom.com/wiki/Absolute_Wonder_Woman_Vol_1"/>
                </td>
                <td>
                    <Series coverimg={spidermanImg} title="Ultimate Spider-Man(2024)" writers=" Jonathan Hickman" artists={[" Marco Checchetto"]} descriptionlink="https://dc.fandom.com/wiki/Superman_Vol_6"/>
                </td>
            </tr>
            <tr>
                <td>
                    <Series coverimg={poisonivyImg} title="Poison Ivy(2022)" writers=" G. Willow Wilson" artists={[" Marcio Takara,", " Hassan Otsmane-Elhaou,", " Arif Prianto"]} descriptionlink="https://dc.fandom.com/wiki/Poison_Ivy_Vol_1"/>
                </td>
                <td>
                    <Series coverimg={zatanna2025} title="ZATANNA(2025)" writers=" Jamal Campbell" artists={[" Jamal Campbell"]} descriptionlink="https://dc.fandom.com/wiki/Zatanna_Vol_3"/>
                </td>
                <td>
                    <Series coverimg={batsupImg} title="Batman/Superman: World's Finest(2022)" writers=" Mark Waid" artists={[" Dan Mora"]} descriptionlink="https://dc.fandom.com/wiki/Batman/Superman:_World%27s_Finest_Vol_1"/>
                </td>
            </tr>
            <tr>
                <td>
                    <Series coverimg={sonofbatImg} title="Robin:Son of Batman(2015-2016)" writers=" Patrick Gleason" artists={[" Patrick Gleason"]} descriptionlink="https://dc.fandom.com/wiki/Robin:_Son_of_Batman_Vol_1#:~:text=Robin%3A%20Son%20of%20Batman%20(Volume,Advertisement"/>
                </td>
                <td>
                    <Series coverimg={nightwing1996Img} title="Nightwing(1996-2009)" writers=" Chuck Dixon" artists={[" Scott McDaniel,", " Karl Story,"]} descriptionlink="https://dc.fandom.com/wiki/Nightwing_Vol_2"/>
                </td>
                <td>
                    <Series coverimg={batdetectiveImg} title="Batman:Detective" writers=" Paul Dini" artists={[" Luciana Del Negro,", " J.H. Williams,", " III,", " Don Kramer,", " Marcos Marz,", " Simone Bianchi,", " Wayne Faucher,", " Joe Benitez,", " Victor Llamas"]} descriptionlink="https://dc.fandom.com/wiki/Batman:_Detective"/>
                </td>
            </tr>
            <tr>
                <td>
                    <Series coverimg={fanta42022Img} title="Fantastic Four(2022)" writers=" Ryan North" artists={[" Marcio Takara,", " Hassan Otsmane-Elhaou,", " Arif Prianto"]} descriptionlink="https://www.marvel.com/comics/series/34035/fantastic_four_2022_present"/>
                </td>
            </tr>
        </table>
    </div>
    )
}

export default Catalog;