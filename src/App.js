function App() {
  return (
    <div>
      <main>
        <h1>To Do</h1>
        <ul>
          <li>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Due 01 Oct 21</p>
            </div>
          </li>
          <li>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Due 06 Oct 21</p>
            </div>
          </li>
          <li>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Due 08 Oct 21</p>
            </div>
          </li>
        </ul>
      </main>
      <section>
        <h1>Complete</h1>
        <ul>
          <li>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Due 01 Oct 21</p>
            </div>
          </li>
          <li>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Due 06 Oct 21</p>
            </div>
          </li>
        </ul>
      </section>
      <div>
        <form>
          <div className="flex-row space-between my-2">
            <label htmlFor="toDo">To Do:</label>
            <input
              placeholder="What do you have to do?"
              name="toDo"
              type="toDo"
              id="toDo"
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="dueDate">Due Date:</label>
            <input
              placeholder="Last"
              name="dueDate"
              type="dueDate"
              id="dueDate"
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
