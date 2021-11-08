import overpy


def get_food_locations(latitude, longitude):
    # Initialize the API
    api = overpy.Overpass()
    # Define the query
    #query = """(node["shop"](around:500,{lat},{lon});
    #            node["building"="retail"](around:500,{lat},{lon});
    #            node["building"="supermarket"](around:500,{lat},{lon});
    #            node["healthcare"="pharmacy"](around:500,{lat},{lon});
    #            node["amenity"="restaurant"](around:500,{lat},{lon});
    #        );out;
    #        """.format(lat=latitude, lon=longitude)
    # Call the API
    query = "node({lat},{lon},{lat},{lon}+.001);out;".format(lat=latitude, lon=longitude)   
    result = api.query(query)
    print(result.nodes)
    return result
    