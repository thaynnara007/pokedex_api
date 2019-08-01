# Pokedex - api

This is a api that has a goal make easy the usubality of the [model](https://github.com/thaynnara007/pokedex) that was developed to classify some pokemons images.

---

## Usage

- The model produced can classify seven pokemons, which are: pikachu, charmander, squirtle, bulbasaur, cyndaquil, totodile and chikorita.
- The model was trained with a dataset of about 8490 images.
- Since the trained model is too big for a commit , it will be find on google drive.
- [Trained model](https://drive.google.com/file/d/1DA2EeCIO4FF8kHjEIJm82oFO_K7hvA-r/view?usp=sharing)

### Set up

> Creating the virtual environment
```shell
$ python -m venv pokevenv
```

> Install dependencies
```shell
$ pip install -r requirements.txt
```

> Activating virtual envrionment
```shell
$ . pokevenv/bin/activate
```

### Using 

> Starting api
```shell
$ python run_model_server.py
```

> Post 
```shell
$ curl -X POST -F image=@pikachu1.jpeg 'http://localhost:5000/pokedex/predict'
```

> The result is a json
```
{
  "max":{
    "label":"pikachu",
    "probability":"94.37%"
    },
    "predictions":[
      {
        "label":"Bulbasaur",
        "probability":"0.01%"
      },
      {
        "label":"Charmander",
        "probability":"0.25%"
      },
      {
        "label":"Squirtle ",
        "probability":"4.23%"
      },
      {
        "label":"chikorita",
        "probability":"0.47%"
      },
      {
        "label":"cyndaquil",
        "probability":"0.46%"
      },
      {
        "label":"pikachu",
        "probability":"94.37%"
      },
      {
        "label":"totodile",
        "probability":"0.21%"
      }
    ],
  "success":true
}
```
