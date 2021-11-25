import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  viewer: {
    height: "100vh",
    width: "100%",
  },
  section: {
    margin: "10px",
    padding: "10px",
  },
  title: {
    fontSize: "32px",
  },
  list: {
    marginLeft: "15px",
  },
});

const PDF = (props) => {
  return (
    <>
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              {/* Info */}
              <Text style={styles.title}>Info</Text>

              <View style={styles.list}>
                <Text>
                  - {props.fName} {props.lName}
                </Text>
                <Text>- {props.email}</Text>
                <Text>- {props.tel}</Text>
              </View>
              {/* Education */}
              <Text style={styles.title}>Education</Text>

              <View style={styles.list}>
                <Text>- {props.uniName}</Text>
                <Text>- {props.degree}</Text>
                <View>
                  <Text>- {props.fromEdu}</Text>
                  <Text>- {props.toEdu}</Text>
                </View>
              </View>

              {/* Experience */}
              <Text style={styles.title}>Experience</Text>

              <View style={styles.list}>
                <Text>- {props.comName}</Text>
                <Text>- {props.position}</Text>
                <View>
                  <Text>- {props.fromExp}</Text>
                  <Text>- {props.toExp}</Text>
                </View>
              </View>
              {/* Eduaction 2 */}
              <Text style={styles.title}>Education</Text>

              <View style={styles.list}>
                <Text>- {props.comName1}</Text>
                <Text>- {props.position1}</Text>
                <View>
                  <Text>- {props.fromEdu1}</Text>
                  <Text>- {props.toEdu1}</Text>
                </View>
              </View>
              {/* Experience 2 */}
              <Text style={styles.title}>Experience</Text>

              <View style={styles.list}>
                <Text>- {props.comName1}</Text>
                <Text>- {props.position1}</Text>
                <View>
                  <Text>- {props.fromExp1}</Text>
                  <Text>- {props.toExp1}</Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PDF;
