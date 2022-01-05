import React from "react";
import "./Collection.css";
import img from "../../Assets/Images/test.png";
import img2 from "../../Assets/Images/test2.png";
import img3 from "../../Assets/Images/test3.png";
import img4 from "../../Assets/Images/test4.png";
import img5 from "../../Assets/Images/test5.png";
import img6 from "../../Assets/Images/test6.png";
import img7 from "../../Assets/Images/test7.png";
function Collection() {
  const clickHandler = (e) => {
    const mobile = window.innerWidth;
    if (mobile <= 1000) {
      if (document.querySelector(".open_hidden") !== null) {
        document.querySelector(".open_hidden").classList.remove("open_hidden");
        document.querySelector(".translate_y").classList.remove("translate_y");
      }
      e.target.classList.add("translate_y");
      e.target.lastChild.classList.add("open_hidden");
    }
  };
  return (
    <div id="collection" className="collection">
      <h1 data-aos="fade-up" data-aos-once='true'>Collection</h1>
      <p data-aos="fade-up" data-aos-once='true'>
        Hover over each card below to learn more about the drop. Join our
        Discord to get the drop date!
      </p>
      <div data-aos="fade-up" data-aos-delay="600" data-aos-once='true' className="collection_grid">
        <span onClick={clickHandler}>
          <img src={img} alt="" className="collection_img" />
          <p className="head-img">Fair Launch</p>
          <p className="hidden">
            Each waifu NFT is 0.03/0.05/0.07 ETH. Only 5/4/3 can be minted per
            transaction. No bonding curve.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img2} alt="" className="collection_img" />
          <p className="head-img">Win Prizes</p>
          <p className="hidden">
            Each waifu NFT is a ticket to participate in every lottery event.
            Each ticket grants X number of entries based on the color rarity.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img3} alt="" className="collection_img" />
          <p className="head-img">Unique Art</p>
          <p className="hidden">
            Only a total of 8,888 waifus will ever be minted into existence,
            making them super rare. 6 color rarities gives you a chance to mint
            an extra rare one!
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img4} alt="" className="collection_img" />
          <p className="head-img">Limited</p>
          <p className="hidden">
            Each NFT waifu is a uniquely composed 1 of 1 piece of artwork drawn
            by our styleGAN2 deep learning AI overlord. No two waifus are the
            same!
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img5} alt="" className="collection_img" />
          <p className="head-img">Make History</p>
          <p className="hidden">
            All Waifustation NFT owners will forever be engraved in history via
            Waifustation OVA.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img6} alt="" className="collection_img" />
          <p className="head-img">Good Cause</p>
          <p className="hidden">
            Upon 80% completion of the Mission Roadmap, 10 ETH will be donated
            to Kyoto Animation.
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img7} alt="" className="collection_img" />
          <p className="head-img">Ownership</p>
          <p className="hidden">
            All waifu NFTs come with full commercial usage rights. Do as you
            please with your waifus!
          </p>
        </span>
        <span onClick={clickHandler}>
          <img src={img6} alt="" className="collection_img" />
          <p className="head-img">Royalties</p>
          <p className="hidden">
            50% of ETH obtained from all gachapon machines will be continuously
            airdropped to the NFT owners.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Collection;
