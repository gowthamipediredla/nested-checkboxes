import React from "react";
import { nestedCheckboxData } from "./data";
export const CheckBoxes = ({
  CheckBoxesData,
  depth = 0,
  checked,
  setChecked,
}) => {
  const changeHandler = (targetCHecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev };
      newState[node.id] = targetCHecked;
      const updateChildren = (node) => {
        node?.children?.forEach((data) => {
          newState[data.id] = targetCHecked;
          updateChildren(data);
        });
      };
      updateChildren(node);
      const updateParent = (node) => {
        //This returns the checked state of this node from newState or false
        if (!node.children || node?.children?.length === 0)
          return newState[node.id] || false;
        const allChecked = node?.children?.map((d) => updateParent(d));
        const checkedall = allChecked.every(Boolean);
        newState[node.id] = checkedall;
        return checkedall;
      };
      // Update parents for all top-level nodes
      nestedCheckboxData.forEach((node) => updateParent(node));

      return newState;
    });
  };
  return (
    <div>
      {CheckBoxesData?.map((data) => (
        <div
          style={{ marginLeft: 15 * depth + "px", textAlign: "left" }}
          key={data.id}
        >
          <input
            type="checkbox"
            checked={checked[data?.id] || false}
            onChange={(e) => changeHandler(e.target.checked, data)}
          />
          {data.label}
          {data.children ? (
            <CheckBoxes
              CheckBoxesData={data.children}
              depth={depth + 1}
              checked={checked}
              setChecked={setChecked}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};
