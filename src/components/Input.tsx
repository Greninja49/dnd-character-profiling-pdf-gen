import React from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

export const TextInput: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="box">
    <label>{label}</label>
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export const TextArea: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="box full">
    <label>{label}</label>
    <textarea value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export const ListInput = ({
  label,
  values,
  onChange,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
}) => {
  const update = (i: number, val: string) => {
    const copy = [...values];
    copy[i] = val;
    onChange(copy);
  };

  return (
    <div className="box full">
      <label>{label}</label>
      {values.map((v, i) => (
        <input key={i} value={v} onChange={(e) => update(i, e.target.value)} />
      ))}
      <button type="button" onClick={() => onChange([...values, ""])}>
        + Add
      </button>
    </div>
  );
};
