import { Singleheader } from "./styles";
import { Breadcrumb } from "react-bootstrap";

const SingleHeaderComp = ({ backgroundImage, heading, body, breadcrumbs }) => {
  return (
    <Singleheader
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="contentWrapper">
       
        <h6>{heading}</h6>
        <p>{body}</p>
        <Breadcrumb>
          {breadcrumbs.map((breadcrumb, index) => (
            <Breadcrumb.Item
              key={index}
              href={breadcrumb.link}
              active={!breadcrumb.link} // Last breadcrumb is active if it has no link
            >
              {breadcrumb.label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    </Singleheader>
  );
};

export default SingleHeaderComp;
