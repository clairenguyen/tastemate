defmodule TastemateBackendWeb.RestaurantController do
  use TastemateBackendWeb, :controller
  import Ecto.Query

  alias TastemateBackendWeb.Restaurants.Restaurant
  alias TastemateBackend.Repo

  def all(conn, _) do
    restaurants =
      from(Restaurant)
      |> Repo.all

    json(conn, %{data: restaurants})
  end
end
