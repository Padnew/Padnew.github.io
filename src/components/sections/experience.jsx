import { Card, Flex, Text } from "comitium-ui";
import React from "react";

export default function Experience() {
  return (
    <Card
      style={{
        display: "block",
        textAlign: "center",
        color: "powderblue",
        marginTop: 15,
      }}
    >
      <Text size="xl" fontWeight="bold" style={{ marginBottom: "15px" }}>
        Experience
      </Text>
      <Flex>
        {/* <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<DiCode />}
              title="Full Stack Software Engineer @ GuitarGuitar"
              c={theme.colors.red[5]}
            >
              <Text c={theme.colors.blue[4]} size="sm">
                - Modernizing legacy systems in crucial areas
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Managing support tasks
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Championed entire project version upgrades
              </Text>
              <Text size="xs" mt={4} c="dimmed">
                Sep 23 - Current
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Software Engineer Intern @ GuitarGuitar"
              c={theme.colors.red[5]}
              bullet={<DiCode />}
            >
              <Text c={theme.colors.blue[4]} size="sm">
                - Writing live code from Day 1
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Championed 2 main projects
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Improving warehouse efficiency significantly
              </Text>

              <Text size="xs" mt={4} c="dimmed">
                June 2023 - Sep 2023
              </Text>
            </Timeline.Item>
            <Timeline.Item
              title="Code Olympics 2023"
              c={theme.colors.red[5]}
              bullet={<DiCode />}
            >
              <Text c={theme.colors.blue[4]} size="sm">
                - Took 3rd Place overall in a team of 3
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Bashed through Leetcode/Hackerank style questions
              </Text>

              <Text size="xs" mt={4} c="dimmed">
                Mar 2023
              </Text>
            </Timeline.Item>
            <Timeline.Item
              title="GUTS 2022 Hackathon"
              c={theme.colors.red[5]}
              bullet={<DiCode />}
            >
              <Text c={theme.colors.blue[4]} size="sm">
                - Won with a team of 3 friends
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Integrated a Chrome Tool
              </Text>
              <Text c={theme.colors.blue[4]} size="sm">
                - Built a Full-stack product viewer
              </Text>

              <Text size="xs" c="dimmed" mt={4}>
                Sep 2022
              </Text>
            </Timeline.Item>
          </Timeline> */}
      </Flex>
    </Card>
  );
}
