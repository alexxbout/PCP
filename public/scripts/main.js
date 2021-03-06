window.addEventListener("load", init);

let chart = null;

/**
 * Init app function
 */
function init() {
    loadCharts();
    hackAmCharts();
    loadAnimations();
}

/**
 * Load animations
 */
function loadAnimations() {
    let scrolled = false;
    let elementTarget = document.getElementById("skills");

    anime({
        targets: ".skillCard",
        scale: 0.4,
        duration: 1
    });

    let skillCardsAnime = anime({
        targets: ".skillCard",
        opacity: [0, 1],
        scale: [0.4, 1],
        duration: 1300,
        delay: anime.stagger(200),
        autoplay: false,
        easing: "easeInOutQuart"
    });

    window.addEventListener("scroll", function() {
        if (checkVisible(elementTarget) && !scrolled) {
            scrolled = true;
            skillCardsAnime.play();
            chart.appear();
        }
    });
}

/**
 * Remove AmCharts watermark
 */
function hackAmCharts() {
    document.querySelectorAll("[aria-labelledby^='id-'][aria-labelledby$='-title']").forEach((item) => {
        item.classList.add("hidden");
    });
}

/**
 * Load skill chart
 */
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
            "category": "JavaScript",
            "value": 60,
            "full": 100
        }, {
            "category": "HTML/CSS/PHP",
            "value": 60,
            "full": 100
        }, {
            "category": "C#",
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

        series2.columns.template.fill = am4core.color("#000000");
    });
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}