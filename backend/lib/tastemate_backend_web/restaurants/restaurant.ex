defmodule TastemateBackendWeb.Restaurants.Restaurant do
  @derive Jason.Encoder
  defstruct [
    :address,
    :cuisine,
    :image_url,
    :name,
    :phone,
    :rating,
    :website_url
  ]
end
