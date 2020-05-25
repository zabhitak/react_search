import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList'

class Apps extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submitting={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default Apps;

// import React from "react";
// import SearchBar from "./SearchBar";

// class Apps extends React.Component {
//   onSearchSubmit(term) {
//     console.log(term);
//   }
//   render() {
//     return (
//       <div classNme="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar submitting={this.onSearchSubmit} />
//       </div>
//     );
//   }
// }

// export default Apps;
