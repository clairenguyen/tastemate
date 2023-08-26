defmodule TastemateBackendWeb.RestaurantControllerTest do
  use TastemateBackendWeb.ConnCase, async: true

  test "returns dummy restaurant fixtures", %{conn: conn} do
    assert %{"data" => restaurants} =
             conn
             |> get("/api/restaurants/all")
             |> json_response(200)

    assert 3 = Enum.count(restaurants)
  end
end
