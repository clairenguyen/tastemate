defmodule TastemateBackendWeb.RestaurantController do
  use TastemateBackendWeb, :controller

  alias TastemateBackendWeb.Restaurants.Restaurant

  @restaurant_fixtures [
    %Restaurant{
      address: "123 Fake St. Irvine, CA 92612",
      cuisine: "Korean",
      image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/UvE_Gc-vE1RUO4hCeR-7eQ/300s.jpg",
      name: "Best Korean Restaurant",
      phone: "1234567890",
      rating: 4.5,
      website_url: "www.bestkoreanrestaurant.com"
    },
    %Restaurant{
      address: "456 Faker St. Los Angeles, CA 90024",
      cuisine: "American",
      image_url:
        "https://www.homewetbar.com/blog/wp-content/uploads/2014/07/best-craft-beer-burger-pairings.jpg",
      name: "Burgers n Brews",
      phone: "8331283312",
      rating: 4.1,
      website_url: "www.burgersnbrews.gov"
    },
    %Restaurant{
      address: "789 Fakest St. Chicago, IL 60602",
      cuisine: "Ethiopian",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/f/f6/Injera_with_eight_kinds_of_stew.jpg",
      name: "Chicago's Finest",
      phone: "7778889999",
      rating: 4.9,
      website_url: "www.chicagosfinest.com"
    }
  ]

  def all(conn, _) do
    json(conn, %{data: @restaurant_fixtures})
  end
end
