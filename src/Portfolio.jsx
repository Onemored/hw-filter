import React from "react";
import Toolbar from "./Toolbar.jsx";
import ProjectList from "./ProjectList.jsx";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  { img: asset("img/mon.jpg"), category: "Business Cards" },
  { img: asset("img/200.jpg"), category: "Websites" },
  { img: asset("img/emi_haze.jpg"), category: "Websites" },
  { img: asset("img/codystretch.jpg"), category: "Websites" },
  { img: asset("img/Triangle_003.jpg"), category: "Business Cards" },
  { img: asset("img/place200x290.png"), category: "Websites" },
  { img: asset("img/200.jpg"), category: "Websites" },
  { img: asset("img/transmission.jpg"), category: "Business Cards" },
  { img: asset("img/place200x290_1.png"), category: "Websites" },
  { img: asset("img/place200x290_2.png"), category: "Flayers" },
  { img: asset("img/the_ninetys_brand.jpg"), category: "Websites" },
  { img: asset("img/dia.jpg"), category: "Business Cards" },
  { img: asset("img/Triangle_350x197.jpg"), category: "Websites" },
  { img: asset("img/emi_haze.jpg"), category: "Websites" },
  { img: asset("img/transmission.jpg"), category: "Business Cards" },
  { img: asset("img/Triangle_350x197_1.jpg"), category: "Websites" },
  { img: asset("img/place200x290_3.png"), category: "Flayers" },
];

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "All",
    };
  }

  handleSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const { selected } = this.state;
    const filters = ["All", ...new Set(projects.map((project) => project.category))];
    const visibleProjects =
      selected === "All"
        ? projects
        : projects.filter((project) => project.category === selected);

    return (
      <main className="page">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={visibleProjects} />
      </main>
    );
  }
}
