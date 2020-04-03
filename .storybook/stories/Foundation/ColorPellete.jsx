import React from "react";

const Item = ({ name, value }) => (
  <div className="color-item">
    <div className="color-item-square" style={{ backgroundColor: value }} />
    <div className="color-item-prop">
      <p>Color Variable</p>
      <div>{name}</div>
    </div>
    <div className="color-item-prop">
      <p>Color Hex</p>
      <div>{value}</div>
    </div>
    <div className="color-item-prop">
      <p>Color RGBA</p>
      <div>{hexToRgbA(value)}</div>
    </div>
  </div>
);

const ColorPellete = ({ title, colors }) => (
  <div className="color-card">
    <div className="color-card-title">{title}</div>
    {Object.keys(colors).map(key => (
      <Item key={key} name={key} value={colors[key]} />
    ))}
  </div>
);

function hexToRgbA(hex){
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
  }
  throw new Error('Bad Hex');
}

export default ColorPellete;
