import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './loading.gif';
import './App.css';
import { ReactiveBase, CategorySearch, SingleRange, ResultCard, SingleList, SelectedFilters } from '@appbaseio/reactivesearch';
import { GridList, GridTile } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';


class App extends Component {

  componentDidMount() {

  }
  
  render() {
    return (
      <ReactiveBase
        app="demo"
        url="http://192.168.1.132:9200/"
        type="product_index">
        <Grid container spacing={24}>
          <Grid item md={3} sm={6} xs={12}>
              <CategorySearch
                title="Nombre"
                componentId="searchbox"
                dataField="name"
                categoryField="_source.name"
                placeholder="Buscar Nombre"
                style={{
                  padding: "5px",
                  marginTop: "10px"
                }}
                react={{
                  and: ["CitySensor", "PriceSensor"]
                }}
              />
              <SingleList
                title="Categoría"
                componentId="CitySensor"
                dataField="categories_name.keyword"
                react={{
                  and: ["searchbox", "CitySensor", "PriceSensor"]
                }}
                style={{
                  padding: "5px",
                  marginTop: "10px"
                }}
              />
              <SingleRange
                componentId="PriceSensor"
                dataField="rating"
                data={
                  [{ "start": 0, "end": 1, "label": "Cheap" },
                  { "start": 1, "end": 2, "label": "Moderate" },
                  { "start": 2, "end": 3, "label": "Pricey" },
                  { "start": 3, "end": 4, "label": "First Date" },
                  { "start": 4, "end": 5, "label": "The Best" }
                  ]
                }
                title="Valoración"
                style={{
                  padding: "5px",
                  marginTop: "10px"
                }}
              />
              <SelectedFilters />
            </Grid>
          <Grid item md={8} sm={6} xs={12}>
              <ResultCard
                componentId="products"
                title="Productos"
                dataField="a"
                from={0}
                size={12}
                pagination={true}
                react={{
                  and: ["searchbox", "Filtro Categoría", "CitySensor", "PriceSensor"]
                }}
                onData={(res) => {
                  return {
                    image: res.image_full_path,
                    title: res.name,
                    description: res.stock ? res.stock : "Out of stock",
                    url: res.url,
                  }
                }}

                loader={
                  <div>
                    <img src="loading.gif" alt="loading..." />
                  </div>
                }
                onNoResults={
                  <div>
                    <p>No hay resultados</p>
                    <p><img src="logo" alt="loading..." /></p>
                  </div>
                }
                showResultStats={false}
              />
            </Grid>

        </Grid>
      </ReactiveBase>
    );
  }
}

export default App;
