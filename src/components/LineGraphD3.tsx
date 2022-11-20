import React, { useEffect } from "react";
import * as d3 from "d3";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  title: string
}

const LineGraphD3: React.FC<Props> = (props: Props) => {
  const { title } = props;

  const { tk1Data, getting, error } = useSelector((state: RootState) => state.referencia);

  useEffect(() => {
    tk1Data.length > 0 && drawLineChart(tk1Data);
  }, [tk1Data]);

  const drawLineChart = (data: any) => {
    let chartData: any = [];
    data.map((d: any) => {
      let lineData: any = [];
      for (let i = 0; i < d[1].times.length; i++) {
        lineData.push({
          label: d[1].times[i],
          value: d[1].values[i],
        });
      }
      chartData.push({
        key: d[0],
        lineData
      })
    })

    var margin = { top: 20, right: 80, bottom: 30, left: 50 },
         width = window.innerWidth / 2 - margin.left - margin.right,
         height = 360 - margin.top - margin.bottom;

    const yMaxValue = d3.max(chartData, (d: any) => d3.max(d.lineData, (d: any) => { return d.value })) as any + 30;
    const xMinValue = d3.min(chartData[0].lineData, (d: any) => d.label);
    const xMaxValue = d3.max(chartData[0].lineData, (d: any) => d.label);

        const xScale = d3
            .scaleLinear()
            .domain([xMinValue as any, xMaxValue as any])
            .range([0, width]);
            
        const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, yMaxValue as any]);

        var line = d3.line()
        .x((d: any) =>  {
            return xScale(d.label)
        })
        .y((d: any) =>  {
            return yScale(d.value)
        })    
        .curve(d3.curveMonotoneX);

        var color = d3.scaleOrdinal(d3.schemeCategory10);

        var svg = d3.select("#line-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale).scale(xScale).tickSize(15));
        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale));

        var legend = svg.selectAll('.segment')
            .data(chartData)
            .enter()
            .append('g')
            .attr('class', 'legend');

        legend.append("path")
            .attr("class", "line")
            .attr('fill', 'none')
            .attr("d", (d: any) => { 
                return line(d.lineData.map((d: any) => d)); 
            })
            .style("stroke", (d: any) => { 
                return color(d.key); 
            });
      
          legend.append('rect')
            .attr('x', width - 260)
            .attr('fill', 'none')
            .attr('y', function(d, i) {
                return i * 20;
            })
              .attr('width', 10)
              .attr('height', 10)
              .style('fill', function(d: any) {
                return color(d.key);
              });
      
          legend.append('text')
            .attr('x', width - 242)
            .attr('y', function(d, i) {
                return (i * 20) + 11;
              })
            .text((d: any) => {
              return d.key;
            });

        var segment = svg.selectAll(".segment")
            .data(chartData)
            .enter().append("g")
            .attr("class", "segment");

        segment.append("path")
        .attr("class", "line")
        .attr('fill', 'none')
        .attr("id", (d: any) => { 
                return d.key;
        })
        .attr("d", (d: any) => { 
            return line(d.lineData.map((d: any) => d)); 
        })
        .style("stroke", (d: any) => { 
            return color(d.key);
    })
  }

  const loading = () => {
    if (getting) {
      return (<div className="text-gray-800 text-xl font-semibold whitespace-no-wrap text-center">Loading data...</div>);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-600 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-gray-800 text-xl font-semibold">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {loading()}
          {/* Chart */}
          <div className="relative">
            <div id="line-chart">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LineGraphD3;
