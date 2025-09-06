import { AutoGrid, Card, Flex, Header, Text } from "comitium-ui";
import React from "react";

export default function Experience() {
  return (
    <Card>
      <AutoGrid>
        <Flex direction="column" spacing={5}>
          <Text size={32}>Experience</Text>
          <Header
            heading="Full Stack Software Engineer @ Guitarguitar"
            subHeading="June 2023 - Current"
          />

          <Text size="sm">
            - Developing, testing and deploying to codebases across multiple
            projects through Azure, primarily in .NET(C#), React and SQL
          </Text>
          <Text size="sm">
            - Led and owned the migration of core legacy systems from ASP.NET to
            React
          </Text>
          <Text size="sm">
            - Championed the redevelopment of a customer returns portal leading
            to a projected company saving of over £120,000 per year on redundant
            returns
          </Text>
          <Text size="sm">
            - Integrated and managed a new primary payment provider whilst
            allowing seamless flow with the secondary provider and following PCI
            compliance throughout
          </Text>
          <Text size="sm">
            - Entrusted with core package upgrades and platform specific
            maintenance in NPM and NuGet
          </Text>
          <Text size="sm">
            - Integrated and maintained Cypress.io testing throughout codebases
            with an 85% coverage
          </Text>
          <Text size="sm">
            - Led and owned the creation of adaptive warehouse maintenance
            systems which aided in over a 70% efficiency improvement across
            logistics and warehouse staff
          </Text>
        </Flex>
        <Flex direction="column" spacing={20}>
          <Text size={32}>Hackathons & Challenges</Text>
          <Flex direction="column" spacing={0}>
            <Header heading="Code Olympics 2023" subHeading="Mar 2023" />
            <Text size="sm">- Took 3rd Place overall with half a team</Text>
            <Text size="sm">- Took 3rd Place in SAS challenges</Text>
            <Text size="sm">
              - Bashed through Leetcode/Hackerank style questions for 24 hours
            </Text>
            <Text size="sm">
              - Tested on a variety of software topics such as algorithms,
              networking and data structures
            </Text>
          </Flex>
          <Flex direction="column" spacing={0}>
            <Header heading="GUTS 2022 Hackathon" subHeading="Sep 2022" />
            <Text size="sm">- Won 1st place in our category</Text>
            <Text size="sm">
              - Built a full stack web-app in React for product visualisation
            </Text>
            <Text size="sm">
              - Full project pulled data from bespoke RESTful APIs
            </Text>
            <Text size="sm">
              - Enabling streamlined e-commerce discovery via YouTube
              integrations
            </Text>
          </Flex>
        </Flex>
      </AutoGrid>
    </Card>
  );
}
