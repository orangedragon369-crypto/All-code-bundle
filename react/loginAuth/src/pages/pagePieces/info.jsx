export default function Info({dataId = ""}){
    if (dataId === ""){
        return(<p className="data">No selected info yet. Choose an option on the left to get started.</p>)
    }
    if (dataId){
        dataId = dataId.split("/")

        return(<div className="data">
        </div>);
    }
}