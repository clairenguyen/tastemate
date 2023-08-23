defmodule TastemateBackendWeb.HelloController do
  use TastemateBackendWeb, :controller

  def index(conn, _) do
    json(conn, %{hello: "world"})
  end
end
