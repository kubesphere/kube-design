import Icon from "components/Icon";
import svgSprites from "components/Icon/spirits";
import { InputSearch } from "components/Input";
import React, { useState, useEffect } from "react";

const CardItem = ({ name }) => {
  return (
    <div className="icon-container">
      <div className="icon-content">
        <Icon name={name} size="sm" />
      </div>
      <div>{name}</div>
    </div>
  );
};

const IconList = () => {
  const [icons, setIcons] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    let arr = [];
    svgSprites.replace(/id="icon-([\w-]+)"/g, (a, b) => {
      arr.push(b);
      return "$&";
    });
    if (!!name) {
      arr = arr.filter((icon) => icon === name);
    }

    setIcons(arr);
  }, [svgSprites, name]);

  return (
    <div>
      <div style={{ padding: 20 }}>
        <InputSearch
          name="search"
          placeholder="please input a icon name"
          onSearch={(name) => {
            setName(name);
          }}
        />
      </div>
      <div className="is-multiline">
        {icons.map((name, i) => (
          <CardItem key={String(name + i)} name={name} />
        ))}
      </div>
    </div>
  );
};

export default IconList;
