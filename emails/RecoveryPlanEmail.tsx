import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Button,
} from '@react-email/components';

interface RecoveryPlanEmailProps {
  leakBreakdown: {
    insuranceLeak: number;
    afterHoursLeak: number;
    databaseLeak: number;
    noShowLeak: number;
    totalMonthlyLeak: number;
    percentageOfRevenue: number;
  };
  monthlyProduction: number;
}

export default function RecoveryPlanEmail({
  leakBreakdown,
  monthlyProduction,
}: RecoveryPlanEmailProps) {
  const annualImpact = leakBreakdown.totalMonthlyLeak * 12;

  return (
    <Html>
      <Head />
      <Preview>Your Revenue Recovery Plan - ${leakBreakdown.totalMonthlyLeak.toLocaleString()}/month</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <div style={logo}>
              <span style={logoText}>Dentiva<span style={logoHighlight}>Systems</span></span>
            </div>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Your Revenue Leak Map</Heading>
            <Text style={paragraph}>
              Based on your practice's operational friction points, we've identified significant revenue recovery opportunities.
            </Text>

            {/* Total Impact Box */}
            <Section style={totalBox}>
              <Text style={totalLabel}>TOTAL MONTHLY RECOVERY POTENTIAL</Text>
              <Heading style={totalAmount}>${leakBreakdown.totalMonthlyLeak.toLocaleString()}</Heading>
              <Text style={percentage}>
                That's {leakBreakdown.percentageOfRevenue}% of your ${monthlyProduction.toLocaleString()} monthly production
              </Text>
              <Text style={annualText}>
                Annual Impact: <strong>${annualImpact.toLocaleString()}</strong>
              </Text>
            </Section>

            {/* Breakdown */}
            <Heading style={h2}>Revenue Leak Breakdown</Heading>

            <Section style={leakItem}>
              <div style={leakBar('#ef4444')} />
              <div style={leakContent}>
                <Text style={leakTitle}>Insurance Verification Leak</Text>
                <Text style={leakAmount}>${leakBreakdown.insuranceLeak.toLocaleString()}/month</Text>
                <Text style={leakDescription}>
                  Lost revenue from denied claims, verification delays, and manual errors
                </Text>
              </div>
            </Section>

            <Section style={leakItem}>
              <div style={leakBar('#f97316')} />
              <div style={leakContent}>
                <Text style={leakTitle}>After-Hours Lead Leak</Text>
                <Text style={leakAmount}>${leakBreakdown.afterHoursLeak.toLocaleString()}/month</Text>
                <Text style={leakDescription}>
                  High-value emergency cases going to voicemail after 5 PM
                </Text>
              </div>
            </Section>

            <Section style={leakItem}>
              <div style={leakBar('#f59e0b')} />
              <div style={leakContent}>
                <Text style={leakTitle}>Ghost Patient Database Leak</Text>
                <Text style={leakAmount}>${leakBreakdown.databaseLeak.toLocaleString()}/month</Text>
                <Text style={leakDescription}>
                  Inactive patients not being systematically reactivated
                </Text>
              </div>
            </Section>

            <Section style={leakItem}>
              <div style={leakBar('#eab308')} />
              <div style={leakContent}>
                <Text style={leakTitle}>No-Show Recovery Leak</Text>
                <Text style={leakAmount}>${leakBreakdown.noShowLeak.toLocaleString()}/month</Text>
                <Text style={leakDescription}>
                  Appointment gaps from inconsistent no-show follow-up
                </Text>
              </div>
            </Section>

            <Hr style={hr} />

            {/* CTA */}
            <Section style={ctaSection}>
              <Heading style={h2}>Ready to Plug These Leaks?</Heading>
              <Text style={paragraph}>
                Our autonomous systems can recover {leakBreakdown.percentageOfRevenue}% of your revenue without adding a single new patient.
              </Text>
              <Button
                style={button}
                href="https://calendly.com/johnowolabi/dentiva-discovery-call"
              >
                Book Your Discovery Call →
              </Button>
              <Text style={smallText}>
                Or reply to this email to schedule a time that works for you.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              DentivaSystems Inc. | Autonomous Front Desk for Dentists
            </Text>
            <Text style={footerText}>
              HIPAA Compliant • SOC 2 Type II Certified
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const header = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const logo = {
  display: 'inline-block',
};

const logoText = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0B1120',
};

const logoHighlight = {
  color: '#14B8A6',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '40px 30px',
  borderRadius: '8px',
};

const h1 = {
  color: '#0B1120',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  lineHeight: '1.2',
};

const h2 = {
  color: '#0B1120',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '30px 0 15px',
};

const paragraph = {
  color: '#64748b',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px',
};

const totalBox = {
  backgroundColor: '#FEF3C7',
  border: '2px solid #F59E0B',
  borderRadius: '12px',
  padding: '30px',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const totalLabel = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#92400E',
  letterSpacing: '1px',
  margin: '0 0 10px',
};

const totalAmount = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#0B1120',
  margin: '0',
  lineHeight: '1',
};

const percentage = {
  fontSize: '18px',
  color: '#64748b',
  margin: '10px 0',
};

const annualText = {
  fontSize: '14px',
  color: '#64748b',
  margin: '5px 0 0',
};

const leakItem = {
  display: 'flex' as const,
  marginBottom: '20px',
  padding: '20px',
  backgroundColor: '#F8FAFC',
  borderRadius: '8px',
};

const leakBar = (color: string) => ({
  width: '4px',
  backgroundColor: color,
  borderRadius: '2px',
  marginRight: '15px',
});

const leakContent = {
  flex: 1,
};

const leakTitle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#0B1120',
  margin: '0 0 5px',
};

const leakAmount = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#14B8A6',
  margin: '0 0 8px',
};

const leakDescription = {
  fontSize: '14px',
  color: '#64748b',
  margin: '0',
  lineHeight: '1.5',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #e2e8f0',
  margin: '30px 0',
};

const ctaSection = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#14B8A6',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '14px 28px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '20px 0',
};

const smallText = {
  fontSize: '14px',
  color: '#94a3b8',
  margin: '10px 0 0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '30px 0 20px',
};

const footerText = {
  fontSize: '12px',
  color: '#94a3b8',
  margin: '5px 0',
};
