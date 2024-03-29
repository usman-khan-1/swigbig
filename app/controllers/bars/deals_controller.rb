class Bars::DealsController < ApplicationController
  layout 'bars'

  before_filter :authenticate_bar!
  
  before_filter :populate_default_deals, :only => [:new, :create, :create_from_default_deal, :edit, :update_from_default_deal, :update]
  before_filter :find_deal, :only => [:show, :edit, :update, :destroy]
  before_filter :load_tipping_points_tiers_and_days_of_week, :only => [:new, :edit, :update, :create, :create_from_default_deal, :update_from_default_deal]

  def new
    @deal = Deal.new
    @bar_deal = BarDeal.new
  end

  def create
    @deal = Deal.new(params[:deal])
    @deal.is_admin = false

    if @deal.save
      BarDeal.create(:bar_id => current_bar.id, :deal_id => @deal.id)
      redirect_to bars_deal_path(@deal), notice: 'Deal was successfully created.'
    else
      @bar_deal = BarDeal.new
      render action: "new"
    end
  end

  def create_from_default_deal
    @bar_deal = BarDeal.new(params[:bar_deal])
    @bar_deal.bar_id = current_bar.id
    if @bar_deal.save
      redirect_to bars_deal_path(@bar_deal.deal), notice: 'Deal was successfully created.'
    else
      @deal = Deal.new
      render action: "new"
    end
  end

  def update_from_default_deal
    if params[:bar_deal]
      if params[:new_deal].blank?
        @bar_deal = BarDeal.where(["bar_id = ? AND deal_id = ?", current_bar.id, params[:deal_id]]).first
        if @bar_deal.update_attributes(params[:bar_deal])
          redirect_to bars_deal_path(@bar_deal.deal.id), notice: 'Deal was successfully updated.'
        else
          @deal = Deal.find(params[:deal_id])
          @new_deal = Deal.new
          @default_deal = true
          render action: "edit"
        end
      else
        @bar_deal = BarDeal.new(params[:bar_deal])
        @bar_deal.bar_id = current_bar.id
        if @bar_deal.save
          deal = Deal.find params[:deal_id]
          deal.destroy if deal
          redirect_to bars_deal_path(@bar_deal.deal.id), notice: 'Deal was successfully updated.'
        else
          @deal = Deal.find params[:deal_id]
          @default_deal = false
          render action: "edit"
        end
      end
    elsif params[:deal]
      @new_deal = Deal.new(params[:deal])
      @new_deal.is_admin = false

      if @new_deal.save
        bar_deal = BarDeal.where(["bar_id = ? AND deal_id = ?", current_bar.id, params[:deal_id]]).first
        bar_deal.destroy if bar_deal
        BarDeal.create(:bar_id => current_bar.id, :deal_id => @new_deal.id)
        redirect_to bars_deal_path(@new_deal), notice: 'Deal was successfully updated.'
      else
        @deal = Deal.find(params[:deal_id])
        @bar_deal = BarDeal.where(["bar_id = ? AND deal_id = ?", current_bar.id, params[:deal_id]]).first
        @default_deal = true
        render action: "edit"
      end
    else
      @bar_deal = BarDeal.where()
    end
  end

  def edit
    if @deal.is_admin
      @new_deal = Deal.new
      @bar_deal = BarDeal.where(["bar_id = ? AND deal_id = ?", current_bar.id, @deal.id]).first
      @default_deal = true
    else
      @bar_deal = BarDeal.new
      @default_deal = false
    end
  end

  def update
    if @deal.update_attributes(params[:deal])
      redirect_to bars_deal_path(@deal), notice: 'Deal was successfully updated.'
    else
      @bar_deal = BarDeal.new
      @default_deal = false
      render action: "edit"
    end
  end

  def show
  end

  def index
    @bar_deals = current_bar.bar_deals
    session[:button] = "deal"
  end

  def destroy
    unless @deal.is_admin
      @deal.destroy
    else
      bar_deal = BarDeal.where(["bar_id = ? AND deal_id = ?", current_bar.id, @deal.id]).first
      bar_deal.destroy
    end
    redirect_to bars_deals_path, notice: 'Deal was successfully deleted.'
  end

  private

  def find_deal
    @deal = Deal.find(params[:id])
  end

  def load_tipping_points_tiers_and_days_of_week
    @tipping_points = Deal::TIPPING_POINTS
    @days_of_week = Deal::DAYS_OF_WEEK
    @tiers = Deal::TIERS
  end

  def populate_default_deals
    @default_deals = Deal.where(is_admin: true)
  end

end
