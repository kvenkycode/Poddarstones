const SectionHeadingComp = ({ title, subtitle, subtext }) => {
  return (
    <>
    <div className="mb-5">
      <h1 style={{fontSize:"30px",color:"#B7945C",margin:"0"}}>{title}</h1>
      <p style={{fontSize:"28px",color:"#5B5B5B,",margin:"0"}}>{subtitle}</p>
      <label style={{marginTop:"25px",fontSize:"13px",lineHeight:"23px"}}>{subtext}</label>
      </div>
    </>
  );
};

export default SectionHeadingComp;
