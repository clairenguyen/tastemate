defmodule TastemateBackend.Repo.Migrations.CreateRestaurants do
  use Ecto.Migration

  def change do
    create table(:restaurants) do
      add :name, :string, null: false
      add :address, :string, null: false
      add :phone, :string, null: false
      add :cuisine, :string, null: false
      add :image_url, :string, null: false
      add :website_url, :string, null: false
      add :rating, :float, null: false
    end
  end
end
