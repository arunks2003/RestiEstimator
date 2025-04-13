import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica'
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4f46e5' // indigo-600
    },
    section: {
        marginBottom: 10,
        padding: 10,
        borderBottom: '1 solid #e5e7eb' // gray-200
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    label: {
        width: '40%',
        fontSize: 12,
        fontWeight: 'bold'
    },
    value: {
        width: '60%',
        fontSize: 12
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6', // gray-100
        padding: 5,
        fontWeight: 'bold',
        fontSize: 12
    },
    tableRow: {
        flexDirection: 'row',
        padding: 5,
        borderBottom: '1 solid #e5e7eb' // gray-200
    },
    col1: { width: '30%', fontSize: 10 },
    col2: { width: '15%', fontSize: 10 },
    col3: { width: '15%', fontSize: 10 },
    col4: { width: '20%', fontSize: 10 },
    col5: { width: '20%', fontSize: 10 }
});

const EstimatePDF = ({ estimate }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text>ResiEstimator - Construction Estimate</Text>
            </View>

            {/* Project Details */}
            <View style={styles.section}>
                <Text style={styles.title}>Project Details</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Project Name:</Text>
                    <Text style={styles.value}>{estimate.projectName || 'Untitled Project'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Configuration:</Text>
                    <Text style={styles.value}>{estimate.bhk} BHK • {estimate.floors} {estimate.floors > 1 ? 'Floors' : 'Floor'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Total Area:</Text>
                    <Text style={styles.value}>{estimate.totalArea} sq.ft</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Construction Quality:</Text>
                    <Text style={styles.value}>{estimate.quality.charAt(0).toUpperCase() + estimate.quality.slice(1)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.value}>{estimate.location.charAt(0).toUpperCase() + estimate.location.slice(1)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Total Estimated Cost:</Text>
                    <Text style={styles.value}>
                        {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                        }).format(estimate.totalCost)}
                    </Text>
                </View>
            </View>

            {/* Materials Table */}
            <View style={styles.section}>
                <Text style={styles.title}>Material Requirements</Text>
                <View style={styles.tableHeader}>
                    <Text style={styles.col1}>Material</Text>
                    <Text style={styles.col2}>Quantity</Text>
                    <Text style={styles.col3}>Unit</Text>
                    <Text style={styles.col4}>Unit Price</Text>
                    <Text style={styles.col5}>Total Cost</Text>
                </View>
                {estimate.materials.map((material, index) => (
                    <View key={index} style={styles.tableRow}>
                        <Text style={styles.col1}>{material.name}</Text>
                        <Text style={styles.col2}>{material.quantity.toLocaleString()}</Text>
                        <Text style={styles.col3}>{material.unit}</Text>
                        <Text style={styles.col4}>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            }).format(material.unitPrice)}
                        </Text>
                        <Text style={styles.col5}>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            }).format(material.totalCost)}
                        </Text>
                    </View>
                ))}
            </View>

            {/* Summary */}
            <View style={styles.section}>
                <Text style={styles.title}>Summary</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Total Materials Cost:</Text>
                    <Text style={styles.value}>
                        {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                        }).format(estimate.totalCost)}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Date Generated:</Text>
                    <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default EstimatePDF;