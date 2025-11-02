import { createEvent } from "@/app/actions/create-event";

const AddEvent = () => {
  return (
    <div>
      <form action={createEvent}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEvent

