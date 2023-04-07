import React from "react";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";


function PostFilter ({filter, setFilter}) {



    return (
        <div>
            <Input
            placeholder="search"
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <Select
              value={filter.sort}
              onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
              defaultValue={"Sort by..."}
              options={[
                {value: "title", name: "by name"},
                {value: "body", name: "by description"}
              ]}
            />
        </div>
    )
}



export default PostFilter