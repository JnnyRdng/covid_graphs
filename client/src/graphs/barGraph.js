const d3 = require("./d3.js");

export function barGraph(data, config) {
    const el = "#bar-graph";
    const width = config.width;
    const height = config.height;
    const margin = { top: 30, right: 20, bottom: 50, left: 50 };

    const graphW = width - margin.left - margin.right;
    const graphH = height - margin.top - margin.bottom;

    const barWidth = graphW / data.length;

    // const tickVals = divideTicks(data, step);

    let svg = d3.select(el).append("svg")
        .attr("class", "graph")
        .attr("width", width)
        .attr("height", height);

    let group = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);


    const xFormat = "%d %b";
    const parseDate = d3.timeParse("%Y-%m-%d");

    // x axis setup
    const x = d3.scaleLinear()
        .range([0, graphW]);
    x.domain(d3.extent(data, d => parseDate(d.date)));

    // y axis setup
    const y = d3.scaleLinear()
        .range([graphH, margin.top]);
    y.domain([0, d3.max(data, d => d[config.targetData])])
        .nice();

    // y axis gridlines extend across the graph
    group.append("g")
        .attr("transform", "translate(0, 0)")
        .attr("class", "grid")
        .attr("color", "white")
        .style("stroke-width", 0.5)
        .style("opacity", 0.4)
        .call(d3.axisLeft()
            .scale(y)
            .tickSize(-graphW)
            .tickFormat("")
        );

    // insert the x axis
    group.append("g")
        .attr("transform", `translate(0, ${graphH})`)
        .style("font-family", "Popular, sans-serif")
        .attr("font-weight", 700)
        .style("font-size", 10)
        .call(d3.axisBottom(x)
            .tickFormat(d3.timeFormat(xFormat))
            // .tickValues(tickVals)
            .tickSize(3)
        )
        .selectAll(".tick text")
        .attr("transform", "translate(0, 0)"
        ).call(wrap, 24);


    // create the bars
    group.append("g")
        .selectAll("bars")
        .data(data)
        .enter()
        .append("rect")
        .attr("fill", `#${config.colour}`)
        .attr("x", d => x(parseDate(d.date)) - (barWidth / 2))
        .attr("y", d => y(d[config.targetData]))
        .attr("height", d => graphH - y(d[config.targetData]))
        .attr("width", barWidth)


}

function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}