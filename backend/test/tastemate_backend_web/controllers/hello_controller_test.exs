defmodule TastemateBackendWeb.HelloControllerTest do
  use TastemateBackendWeb.ConnCase, async: true

  test "returns hello world json", %{conn: conn} do
    assert %{"hello" => "world"} =
             conn
             |> get("/api/hello")
             |> json_response(200)
  end
end
