import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"


export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
       <VerticalTimelineElement className="vertical-timeline-element--education"
       date="2018-2020"
       iconStyle={{background: "#3e497a" ,color :"#fff" }}
       icon={<SchoolIcon/>}
       >
          <h3 className="vertical-timeline-element-title">
            Dav Public School , Hehal , Ranchi, Jharkhand
            </h3>
            <p>
            Secondary School Certificate (SSC)
            </p>

       </VerticalTimelineElement>

       <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020(Nov)-Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Birla Institute of Technology , Mesra
          </h3>
           <p> Btech in Computer Science</p>
</VerticalTimelineElement>
           <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan(2022)-July(2022)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Google Developer Student Club
          </h3>
           <p> Event Manager <br/>
            Successfully conducted many events .
           </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan(2022)-Mar(2023)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Geeks For Geeks 
          </h3>
           <p> Social Media Manager <br/>
           
           </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Dec(2022)-Jan(2023)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Exposys Data Labs
          </h3>
           <p> Front-end <b>intern</b> at exposys data labs <br/>
            Developing a video chatting website.
           </p>

          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan(2023)-Mar(2023)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Edunet Foundation (AICTE)
          </h3>
           <p> Front-end <b>intern</b> at Edunet Foundation <br/>
            Developed this portfolio .
           </p>

          
        </VerticalTimelineElement>
        

    </VerticalTimeline>

    </div>
  )
}
