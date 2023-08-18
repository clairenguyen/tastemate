defmodule TastemateBackend.Repo do
  use Ecto.Repo,
    otp_app: :tastemate_backend,
    adapter: Ecto.Adapters.Postgres
end
