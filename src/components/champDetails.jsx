import React from "react";

const ChampDetails = ({ toggleModal, champDetails }) => {
  return (
    <div className="modal-container">
      <div className="hero">
        <div className="image-wrapper">
          <img src={champDetails.big_image_url} alt="champ-image" />
        </div>
        <div className="intro">
          <h2>{champDetails.name}</h2>
        </div>
      </div>
      <div className="description">
        <div className="feature">
          <span className="heading">Armor</span>
          <span className="value">
            {champDetails.armor}
            <span className="per-level">{champDetails.armorPerLevel}</span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Attack Damage</span>
          <span className="value">
            {champDetails.attackDamage}
            <span className="per-level">
              {champDetails.attackDamagePerLevel}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Attack range</span>
          <span className="value">
            {champDetails.attackRange}
            <span className="per-level">
              {champDetails.attackRangePerLevel}
            </span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Attack speed offset</span>
          <span className="value">
            {champDetails.attackSpeed}
            <span className="per-level">{champDetails.attackSpeed}</span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Crit</span>
          <span className="value">
            {champDetails.crit}
            <span className="per-level">{champDetails.critPerLevel}</span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">HP regen</span>
          <span className="value">
            {champDetails.hp}
            <span className="per-level">{champDetails.hpPerLevel}</span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Movespeed</span>
          <span className="value">{champDetails.moveSpeed}</span>
        </div>
        <div className="feature">
          <span className="heading">MP</span>
          <span className="value">
            {champDetails.mp}
            <span className="per-level">{champDetails.mpPerLevel}</span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">MP regen</span>
          <span className="value">
            {champDetails.mpRegen}
            <span className="per-level">{champDetails.mpRegenPerLevel}</span>
          </span>
        </div>
        <div className="feature">
          <span className="heading">Spellback</span>
          <span className="value">
            {champDetails.spellBack}
            <span className="per-level">{champDetails.spellBackPerLevel}</span>
          </span>
        </div>
      </div>
      <div className="close-modal" onClick={toggleModal}></div>
    </div>
  );
};

export default ChampDetails;
