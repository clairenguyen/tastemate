defmodule TastemateBackendWeb.RestaurantControllerTest do
  use TastemateBackendWeb.ConnCase, async: true
  import Mock

  alias TastemateBackend.Repo
  alias TastemateBackendWeb.Restaurants.Restaurant

  test "returns dummy restaurant fixtures", %{conn: conn} do
     test_restaurants = [
      %Restaurant{
        name: "First Restaurant"
      },
      %Restaurant{
        name: "Second Restaurant"
      },
      %Restaurant{
        name: "Third Restaurant"
      }
    ]

    with_mock Repo, [all: fn(_arg) -> test_restaurants end] do
      assert %{"data" => test_restaurants} =
              conn
              |> get("/api/restaurants/all")
              |> json_response(200)

      assert 3 = Enum.count(test_restaurants)
    end
  end
end
