
module.exports = {

    setupREST: function( app, url, rest ) {
        if( rest.index     ) app.get       ( url         , rest.index     );
        if( rest.show      ) app.get       ( url + '/:id', rest.show      );
        if( rest.create    ) app.post      ( url         , rest.create    );
        if( rest.remove    ) app['delete'] ( url + '/:id', rest.remove    );
        if( rest.removeAll ) app['delete'] ( url         , rest.removeAll );
        if( rest.update    ) app.put       ( url + '/:id', rest.update    );
    },

    serveFile: function( file ) {
        return function(req, res) {
            res.render(file);
        };
    }

};