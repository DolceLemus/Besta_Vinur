
$(document).ready(function(){

    const getHome = $("form").submit(function(ev) {
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
    $("#container").append(templateHome);

})


    const getItems = $("form").submit(function (ev) {
        ev.preventDefault();
        const getURL = 'https://api.mercadolibre.com/sites/MLM/search?q="+ pets';

        $.get(getURL, function (data) {

            let items = data.results;
            console.log(items);
            items.forEach(element => {
                let url = element.thumbnail;
                let title = element.title;
                let price = element.price;
                let currency = element.currency_id;
                let quantity = element.available_quantity;
                let templateHome = `
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="{{url}}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{title}}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">$ {{price}} {{currency}}</li>
                                <li class="list-group-item">Disponible: {{quantity}} pz</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>`;

                let replaceTemplateHome = templateHome.replace("{{url}}", url)
                    .replace("{{price}}", price)
                    .replace("{{title}}", title)
                    .replace("{{currency}}", currency)
                    .replace("{{quantity}}", quantity);

                $("#container").append(replaceTemplateHome);

            });
        });

    })


if ($("#home-btn").click) {
    getHome();
} 
if($("#store-btn").click){
    getItems();
}

});

