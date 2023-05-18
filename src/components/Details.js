import { useState, useEffect } from "react";
export default function Details({ props }) {
  let [avatarUrl, setAvatarUrl] = useState();
  let [info, setInfo] = useState({});
  let [update, setUpdate] = useState(true);
  let loadData = () => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.avatar);
        setInfo(data.details);
        setUpdate(false);
        
      })
      .catch((error) => console.error(error));
      return () => {
        setAvatarUrl(null)
      }
  };
  useEffect(loadData, []);
  useEffect(loadData, [props.id])
  return (
    <>
      <div className="person-container">
        <div>
          {update && <p>'Updating...'</p>}
          <img src={avatarUrl} className="avatar" />
        </div>
        <div className="person-details">
          <div className="details-name">{props.name}</div>
          <div className="details-data">{info.city}</div>
          <div className="details-data">Company: {info.company}</div>
          <div className="details-data">Position: {info.position}</div>
        </div>
      </div>
    </>
  );
}