import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.search}
        onChange={(e) => setFilter({...filter, search: e.target.value})}
        type="text"
        placeholder="search"
      />
      {/* //============================== */}
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue={"Sort by"}
        options={[
          { value: "title", name: "name" },
          { value: "body", name: "description" },
        ]}
      />
    </div>
  );
}
