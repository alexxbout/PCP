window.addEventListener("load", loaded);

let chart = null;

function loaded() {
    loadCharts();
    loadHomepage();
    hackAmCharts();

    // const threshold = 100;
    // let scrolled = false;
    // let elementTarget = document.getElementById("skills");

    // let skillCardsAnime = anime({
    //     targets: ".skillCard",
    //     opacity: [0, 1],
    //     scale: [0.5, 1],
    //     translateY: [
    //         { value: "-200px", duration: 1 },
    //         { value: "0px" }
    //     ],
    //     delay: anime.stagger(150),
    //     autoplay: false,
    //     easing: "easeInOutQuad"
    // });

    // window.addEventListener("scroll", function() {
    //     if (window.scrollY > (elementTarget.offsetTop - threshold) && !scrolled) {
    //         scrolled = true;
    //         skillCardsAnime.play();
    //         chart.appear();
    //     }
    // });

    /* Prevent image drag */
    let images = document.images;

    for (let i = 0; i < images.length; i++)
        images[i].setAttribute("draggable", false);
}

function loadHomepage() {
    anime({
        targets: ".helloScreen",
        opacity: 1,
        translateX: ["-30px", "0px"],
        duration: 2000,
        easing: "easeInOutQuart",
    });

    anime({
        targets: [".arrow", ".header"],
        opacity: 1,
        duration: 2000,
        easing: "easeInOutQuart",
    });

    anime({
        targets: ".dot",
        easing: "easeInOutSine",
        duration: 2000,
        opacity: [0, 0.8],
        scale: [0.4, 1],
        translateX: "-50%",
        translateY: "-50%",
        left: function() {
            return anime.random(25, 75) + "vw";
        },
        top: function() {
            return anime.random(0, 50) + "vh";
        },
        delay: anime.stagger(500)
    });

}

function hackAmCharts() {
    document.querySelectorAll("[aria-labelledby^='id-'][aria-labelledby$='-title']").forEach((item) => {
        item.classList.add("hidden");
    });
}

function loadCharts() {
    am4core.ready(function() {
        am4core.useTheme(am4themes_animated);
        chart = am4core.create("chartdiv", am4charts.RadarChart);

        chart.colors.list = [
            am4core.color("#1c1c1c")
        ];

        chart.data = [{
            "category": "Python",
            "value": 50,
            "full": 100
        }, {
            "category": "C#",
            "value": 50,
            "full": 100
        }, {
            "category": "JavaScript",
            "value": 55,
            "full": 100
        }, {
            "category": "HTML/CSS/PHP",
            "value": 60,
            "full": 100
        }, {
            "category": "Java",
            "value": 85,
            "full": 100
        }];

        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = am4core.percent(20);

        chart.numberFormatter.numberFormat = "#.#'%'";

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.fontWeight = 500;
        categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
            return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
        });
        categoryAxis.renderer.minGridDistance = 10;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.labels.template.fontSize = 0;

        let series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        series1.columns.template.fillOpacity = 0.08;
        series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;

        let series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        // series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
        series2.columns.template.radarColumn.cornerRadius = 20;

        // series2.columns.template.adapter.add("fill", function(fill, target) {
        //     return chart.colors.getIndex(target.dataItem.index);
        // });

        series2.columns.template.fill = am4core.color("#ff5200");
    });
}