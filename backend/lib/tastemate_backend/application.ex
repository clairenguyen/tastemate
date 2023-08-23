defmodule TastemateBackend.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      TastemateBackendWeb.Telemetry,
      # Start the Ecto repository
      TastemateBackend.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: TastemateBackend.PubSub},
      # Start Finch
      {Finch, name: TastemateBackend.Finch},
      # Start the Endpoint (http/https)
      TastemateBackendWeb.Endpoint
      # Start a worker by calling: TastemateBackend.Worker.start_link(arg)
      # {TastemateBackend.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TastemateBackend.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    TastemateBackendWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
