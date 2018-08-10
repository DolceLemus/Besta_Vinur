
$(document).ready(function(){

const homeTemplate = () => {
    let templateHome = ` 
    <main>
        <section id="cont-home" class="opac">
            <div id="home" class="">
                <div class="" id="buy-cont">
                    <br>
                    <h1>
                        Compra en
                        <img src="assets/text_logo_w.PNG" alt="">
                    </h1>
                    <h2>y ayuda a un amigo a obtener un</h2>
                    <br>
                    <h2>buen HOGAR</h2>

                </div>
            </div>
        </section>
        <section id="cont-food" class="opac">
            <div id="food" class="mt-2">
                <div class="" id="food-cont">
                    <br>
                    <h1>
                        Sabías qué.... 
                    </h1>
                    <h2>En CDMX  </h2>
                    <p>Por cada 7 personas existe 1 perro callejero
                    y esta posicionada en el primer lugar a nivel latinoamerica como la ciudad con más perros callejeros.</p>
                </div>
            </div>
        </section>
        <section id="cont-accesories" class="opac">
            <div id="accesories" class=" mb-2 mt-2">
                    <div class="" id="accesories-cont">
                        <br>
                        <h1>
                            Promueve
                        </h1>
                        <h1>
                            la
                        </h1>
                        <h1>
                            la adopción
                        </h1>
                    </div>
            </div>
        </section>
    </main>`;
    console.log(templateHome);
    $("#container").append(templateHome);

}

// IMAGES
    const url = 'http://webservices.amazon.com/onca/xml?AWSAccessKeyId={{AWS Access Key ID}}';
    const template = function (name, picture, id) {
        var t = "<div id='pokemon'><img src='" + picture + "'/><p>'" + name + "'</p><p> ID: '" + id + "'</p></div>"
        return t;
    }

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data.pokemon_entries);
            let ul = document.getElementById('list');
            let pokemones = data.pokemon_entries;
            pokemones.forEach(element => {
                let picture = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + element.entry_number + '.png';
                let name = element.pokemon_species.name;
                let id = element.entry_number;
                $('#list').append(template(name, picture, id));
            });
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        }); 




homeTemplate();


});

