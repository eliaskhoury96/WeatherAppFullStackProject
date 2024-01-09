  class Renderer {
     renderCities(cities) {
        $("#cities-list-container").empty()
      const templateSource = $("#cities-template").html();
      const template = Handlebars.compile(templateSource);
      const html = template({ cities });
      $("#cities-list-container").append(html);
     }
    }
    





  