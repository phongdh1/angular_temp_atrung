export class Constants {
  public static Format = {
    'Date': {
      Long: 'dd/MM/yyyy HH:mm:ss',
      Short: 'dd/MM/yyyy'
    }
  }

  public static SearchConstant = {
    PageSize: {
      5: 5,
      10: 10,
      15: 15,
      20: 20
    }
  }

  public static FilterDateLabelConstants = {
    dayHeader: "Theo ngày",
    dayYesterday: "Hôm qua",
    dayToday: "Hôm nay",
    weekHeader: "Theo tuần",
    weekThis: "Tuần này",
    weekLast: "Tuần trước",
    monthHeader: "Theo tháng",
    monthThis: "Tháng này",
    monthLast: "Tháng trước",
    allHeader: "Toàn thời gian",
    all: "All"
  }

  public static FilterDateConstantsTime = {
    Yesterday: {
      label: Constants.FilterDateLabelConstants.dayYesterday,
      value: [new Date(new Date().setDate(new Date().getDate() - 1)), new Date()]
    },
    Today: {
      label: Constants.FilterDateLabelConstants.dayToday,
      value: [new Date(), new Date()]
    },
    WeekThis: {
      label: Constants.FilterDateLabelConstants.weekThis,
      value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()]
    },
    WeekLast: {
      label: Constants.FilterDateLabelConstants.weekLast,
      value: [new Date(new Date().setDate(new Date().getDate() - 14)), new Date(new Date().setDate(new Date().getDate() - 7))]
    },
    MonthThis: {
      label: Constants.FilterDateLabelConstants.monthThis,
      value: [new Date(new Date().setDate(new Date().getDate() - 30)), new Date()]
    },
    MonthLast: {
      label: Constants.FilterDateLabelConstants.monthLast,
      value: [new Date(new Date().setDate(new Date().getDate() - 60)), new Date(new Date().setDate(new Date().getDate() - 30))]
    },
    All: {
      label: Constants.FilterDateLabelConstants.allHeader,
      value: Constants.FilterDateLabelConstants.all
    }
  }

  public static FilterDateConstants = {
    dayGroup: {
      label: Constants.FilterDateLabelConstants.dayHeader,
      subGroup: [
        Constants.FilterDateConstantsTime.Yesterday,
        Constants.FilterDateConstantsTime.Today
      ]
    },
    weekGroup: {
      label: Constants.FilterDateLabelConstants.weekHeader,
      subGroup: [
        Constants.FilterDateConstantsTime.WeekThis,
        Constants.FilterDateConstantsTime.WeekLast
      ]
    },
    monthGroup: {
      label: Constants.FilterDateLabelConstants.monthHeader,
      subGroup: [
        Constants.FilterDateConstantsTime.MonthThis,
        Constants.FilterDateConstantsTime.MonthLast,
        Constants.FilterDateConstantsTime.All
      ]
    }
  }

  public static Permission = {
    Function: {
      DashboardAdmin: "DASHBOARD_ADMIN",
      DashboardProduct: "DASHBOARD_PRODUCT_EXECUTIVE",
      Order: "ORDER",
      Manufacturing: "MANUFACTURING",
      Qc: "QC",
      User: "SYSTEM_USER",
      Customer: "SYSTEM_CUSTOMER",
      Product: "SYSTEM_PRODUCT",
      ProdutCategory: "SYSTEM_PRODUCT_CATEGORY",
      Color: "SYSTEM_COLOR",
      Price: "SYSTEM_PRICE_BOARD",
      CancelRequest: "CANCEL_ORDER_REQUEST",
      Deposit: "DEPOSIT",
      Billing: "BILLING"
    },
    Command: {
      View: "VIEW",
      Create: "CREATE",
      Update: "UPDATE",
      Check: "CHECK",
      Packaging: "PACKAGING"
    }

  }

  public static TimeConstants = {
    Delay1s: 1000,
    Delay3s: 3000,
    Delay5s: 5000
  }

  public static Language = ['vi','en']
}