async function get_data() {
  try {
    let search_data = document.getElementById("favTvShow").value;

    let promise_data = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search_data}`
    );

    let json_data = await promise_data.json();
    console.log(json_data);

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.setAttribute("style", "color:white");
    p.innerHTML = `Show Language:${json_data[0].show.language}<br/>
    Show genre:${json_data[0].show.genres}<br/> 
    Show premiered:${json_data[0].show.premiered}<br/> 
    Show summary:${json_data[0].show.summary}<br/>  
    Show rating:${json_data[0].show.rating.average}`;

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.setAttribute("style", "color:white");
    h5.innerHTML = `${json_data[0].show.name}`;

    var card_text_body = document.createElement("div");
    card_text_body.setAttribute("class", "card-body");

    var card_text_col = document.createElement("div");
    card_text_col.setAttribute("class", "col-md-8");

    var img = document.createElement("img");
    img.setAttribute("src", `${json_data[0].show.image.medium}`);
    img.setAttribute("class", "img-fluid rounded-start");

    var img_col = document.createElement("div");
    img_col.setAttribute("class", "col-md-4");

    var img_row = document.createElement("div");
    img_row.setAttribute("class", "row g-0");

    var card = document.createElement("div");
    card.setAttribute("class", "card mb-3 bg-dark mx-auto");
    card.setAttribute("style", "max-width: 540px; margin-top: 20px");

    card_text_body.append(h5, p);
    card_text_col.append(card_text_body);

    img_col.append(img);
    img_row.append(img_col, card_text_col);

    card.append(img_row);
    document.body.append(card);
  } catch {
    console.log("inside catch block");
  }
}
