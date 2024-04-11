import React from "react";
import collection from "../assets/collection.jpg";

const Collection = () => {
  return (
    <div id="collections" className="flex bg-white">
      <img
        src={collection}
        alt="collection"
        className="w-1/2 rounded-md pl-4"
      />
      <div className="flex-col pt-28">
        <h2 className="font-bold mb-2 text-3xl pb-4 px-10">Bliss Collection</h2>
        <p className="px-10 text-lg">
          Drawing from the astrological chart, the Bliss Collection employs a
          modern yet intricate design language to capture the unique spirit of
          the zodiac symbols. Playful figurines are manifested in flawlessly
          faceted white crystal and engraved gold-tone details. ​Shining with
          character, they’re the ideal gifts.
        </p>
        <div className="px-10 text-lg pt-6 underline decoration-solid cursor-pointer">
          <p clasName="">Shop Bliss collection</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
