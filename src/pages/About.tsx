import { Container } from "../components/container";
export function About() {
  return (
    <div>
      <section className="pt-8 pb-8">
        <Container>
          <h1>Mission of the Chocolate Woods</h1>
          <p>
            Our mission is to help beauty professionals save time. Thats why I
            want to create app that allows them to manage their clients easily.
            On the other hand to provide people with fast and easy way for
            booking beauty services from their favourite master.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <h2>Our features</h2>
          <ul>
            <li>
              <h3>Calendar</h3>
              <p>
                Useful instrument for planing your work time. Setting and
                understanding your vacant hours for different client orders.
              </p>
            </li>
            <li>
              <h3>Balance</h3>
              <p>Help to count your great profit.</p>
            </li>
            <li>
              <h3>Online booking</h3>
              <p>
                Comfortable and intuitive feature to help clients booking
                services and seeing your vacant time.
              </p>
            </li>
            <li>
              <h3>Client base</h3>
              <p>
                Accumulate information from registered users and helps beauty
                professionalists to keep in touch with their clients.
              </p>
            </li>
          </ul>
        </Container>
      </section>
    </div>
  );
}
