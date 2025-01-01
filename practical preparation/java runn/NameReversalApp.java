import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class NameReversalApp extends JFrame implements ActionListener {
    private JTextField nameField;
    private JButton reverseButton;
    private JLabel resultLabel;

    public NameReversalApp() {
        setTitle("Name Reversal App");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Input Panel
        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new FlowLayout());
        inputPanel.add(new JLabel("Enter name:"));
        nameField = new JTextField(20);
        inputPanel.add(nameField);
        reverseButton = new JButton("Reverse Name");
        reverseButton.addActionListener(this);
        inputPanel.add(reverseButton);

        // Result Label
        resultLabel = new JLabel("Reversed name will appear here.");
        resultLabel.setHorizontalAlignment(SwingConstants.CENTER);

        // Adding components to the frame
        add(inputPanel, BorderLayout.NORTH);
        add(resultLabel, BorderLayout.CENTER);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String name = nameField.getText();
        String reversedName = new StringBuilder(name).reverse().toString();
        resultLabel.setText("Reversed name: " + reversedName);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            NameReversalApp app = new NameReversalApp();
            app.setVisible(true);
        });
    }
}
