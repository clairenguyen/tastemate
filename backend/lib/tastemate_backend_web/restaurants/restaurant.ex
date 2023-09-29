defmodule TastemateBackendWeb.Restaurants.Restaurant do
  use Ecto.Schema

  @derive {Jason.Encoder, only: [:name, :address, :phone, :cuisine, :image_url, :website_url, :rating]}
  schema "restaurants" do
    field :name, :string
    field :address, :string
    field :phone, :string
    field :cuisine, :string
    field :image_url, :string
    field :website_url, :string
    field :rating, :float
  end
end
