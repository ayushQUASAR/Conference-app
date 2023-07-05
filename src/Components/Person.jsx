export default function Person({el}) {
    return (
      <div className="profile">
      <div className="img"><img src={el.ImgLink} alt="" /> </div>
      <div className="content-p">
        <div className="sname">{el.Name}</div>
        <div className="post">{el.Designation}</div>
        <div className="col-name">{el.Institute}</div>
        <div className="col-talk-name">{el.TalkTitle}</div>
      </div>  
    </div>
    );
      };